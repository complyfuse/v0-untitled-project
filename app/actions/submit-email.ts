"use server"

export async function submitToWaitlist(formData: FormData) {
  const email = formData.get("email") as string
  const honeypot = formData.get("website") as string

  // Honeypot check - if filled, it's likely a bot
  if (honeypot) {
    return { success: false, error: "Invalid submission" }
  }

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address" }
  }

  try {
    // Replace this URL with your Google Apps Script Web App URL
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL

    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL environment variable not set")
      return { success: false, error: "Configuration error" }
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: "ComplyFuse Landing Page",
        listId: "EARLY_ACCESS",
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      return { success: true, message: "Thanks! Confirmation is on the way." }
    } else {
      return { success: false, error: "Failed to submit. Please try again." }
    }
  } catch (error) {
    console.error("Error submitting to waitlist:", error)
    return { success: false, error: "Failed to submit. Please try again." }
  }
}
