// 🔴 แก้ไข 2 บรรทัดนี้ให้เป็นค่าของคุณ
const LIFF_ID = "2010395332-urAIJlTe";
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbyOBXix2UwTXGMn4H-rvvof_jj51rg1elvGYViPZjXo1-Yx42kIVnOWXpkRqyY0xBQs/exec";

let GLOBAL_UID = "";

async function initLINE(requireAuth = true) {
  await liff.init({ liffId: LIFF_ID });
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: window.location.href });
    return null;
  }
  const profile = await liff.getProfile();
  GLOBAL_UID = profile.userId;
  
  if (requireAuth) {
    const res = await callGAS('getEmployeeData', { lineUserId: GLOBAL_UID });
    if (!res.data || res.data.status !== 'active') {
       window.location.replace(`https://liff.line.me/${LIFF_ID}?page=register`);
       return null;
    }
    return res.data;
  }
  return profile;
}

async function callGAS(action, payload = {}) {
  const res = await fetch(GAS_API_URL, {
    method: "POST",
    headers: { "Content-Type': "text/plain;charset=utf-8" }, // ใช้ text/plain เพื่อกัน Google Block CORS
    body: JSON.stringify({ action: action, ...payload })
  });
  return await res.json();
}