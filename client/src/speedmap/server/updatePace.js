async function updatePace(t, d, r, p) {
  try {
    let body = { track: t, date: d, race: r, pace: p };

    const response = await fetch("/speedmap/pace", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      let responseCode = response.status();
      return { updateError: true, responseCode: { responseCode } };
    } else {
      return { updateError: false };
    }
  } catch (e) {
    return { updateError: true, responseCode: "unknown" };
  }
}

export default updatePace;
