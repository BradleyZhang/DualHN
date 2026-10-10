export const getHtml = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url, {
      redirect: "follow",
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const html = await response.text();
    return html;
  } catch (error) {
    console.error("HTML 获取失败:", error);
    throw error;
  }
};
