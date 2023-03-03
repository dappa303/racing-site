async function updateMove(t, d, r, h, s, p) {
  try {
    let body = {
      track: t,
      date: d,
      race: r,
      horse: h,
      scratched: s,
      position: p,
    };

    const response = await fetch("/speedmap/move", {
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

export default updateMove;
