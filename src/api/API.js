// export const authToken = process.env.REACT_APP_AUTH;
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0ZDAyZjlmZS1iM2MwLTQwMzMtODdhMC00NTc2NjRmZDczMDEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwOTM5MDM4MSwiZXhwIjoxODY3MTc4MzgxfQ.uM1PBy2kLUYg8a8FHnMcNfXgdVs0UnYNouMm_czbQT8";
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const { roomId } = await res.json();
  return roomId;
};