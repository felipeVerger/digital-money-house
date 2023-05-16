import { RegisterData, RegisterResponse } from "@/types/register.types";

export const registerUser = async (
  userData: RegisterData
): Promise<RegisterResponse> => {
  const response = await fetch("https://digitalmoney.ctd.academy/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...userData,
      dni: Number(userData.dni),
    }),
  });
  const data = await response.json();

  return data;
};
