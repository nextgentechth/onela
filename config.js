const AppConfig = {
  SUPABASE_URL: "https://quwarpyunbprrsvevtvj.supabase.co", // นำมาจาก Supabase
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d2FycHl1bmJwcnJzdmV2dHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNDM4MDQsImV4cCI6MjA5ODgxOTgwNH0.dPsPpV1TorY_1nxAzN3eaeGDZR5gz0R_8mGJdyaEXio", // นำมาจาก Supabase
  LIFF_ID: "2010395332-urAIJlTe",
  GAS_MAILMAN_URL: "https://script.google.com/macros/s/AKfycbwXDto-P77lLX6vz17Gh5D60OsudslM8rDELwR9FDgXem8XqJNa5emlyJ6xzNopH2J0Ig/exec",
  GAS_SECRET: "COOPKKU_SECRET_2026",

  DEPARTMENTS: ['ฝ่ายธุรการ','ฝ่ายการเงิน','ฝ่ายบัญชี','ฝ่ายสินเชื่อ','ฝ่ายทะเบียน','ฝ่ายสวัสดิการ','ฝ่ายบริหาร', 'ฝ่ายทรัพยากรบุคคล'],
  POSITIONS: ['เจ้าหน้าที่','ผู้ช่วยผู้จัดการ','รองผู้จัดการ','ผู้จัดการ'],
  
  LEAVE_TYPES: [
    { id: 'vacation', name: 'พักร้อน', emoji: '🏖️', bal: 'bal_vacation', quota: 10 },
    { id: 'personal', name: 'ลากิจ', emoji: '🏠', bal: 'bal_personal', quota: 10 },
    { id: 'sick', name: 'ลาป่วย', emoji: '🏥', bal: 'bal_sick', quota: 60 },
    { id: 'training', name: 'ฝึกอบรม', emoji: '📚', bal: 'bal_training', quota: 15 },
    { id: 'maternity', name: 'ลาคลอดบุตร', emoji: '🤰', bal: 'bal_maternity', quota: 120 },
    { id: 'paternity', name: 'ช่วยภรรยาคลอด', emoji: '👨‍🍼', bal: 'bal_paternity', quota: 15 },
    { id: 'childcare', name: 'เลี้ยงดูบุตร', emoji: '👶', bal: 'bal_childcare', quota: 15 },
    { id: 'ordination', name: 'อุปสมบท', emoji: '🪷', bal: 'bal_ordination', quota: 120 },
    { id: 'hajj', name: 'ฮัจย์', emoji: '🕋', bal: 'bal_hajj', quota: 120 }
  ]
};

// 🌟 ฟังก์ชันส่งไลน์แยกออกมา เพื่อไม่ให้บล็อกการทำงานของระบบหลัก
window.sendLineNotify = async function(action, toIds, payloadData) {
  if (!AppConfig.GAS_MAILMAN_URL || !toIds || toIds.length === 0) return;
  const validIds = toIds.filter(id => id); // กรองค่า null
  if (validIds.length === 0) return;

  try {
    fetch(AppConfig.GAS_MAILMAN_URL, {
      method: 'POST', mode: 'no-cors', // 💡 ใช้ no-cors แก้บั๊ก Bad Request/CORS
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ apiKey: AppConfig.GAS_SECRET, action: action, to: validIds, data: payloadData })
    }).catch(() => {}); // ปล่อยผ่านถ้ามี error ย่อย
  } catch(e) { console.warn("Line API Error:", e); }
};
