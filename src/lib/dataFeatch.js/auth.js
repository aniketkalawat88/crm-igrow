import axiosInstance from "./axios";
export const LoginAPI = async (data) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
      data
    );

    if (response.status >= 200 && response.status < 300) {
      localStorage.setItem("token", response.data.accessToken);
      return { data: response.data }; // Return the response data
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    return { error };
  }
};
