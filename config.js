const AppConfig = {
  // 🌟 ตั้งค่า Supabase ของคุณที่นี่
  SUPABASE_URL: "https://quwarpyunbprrsvevtvj.supabase.co/rest/v1/",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d2FycHl1bmJwcnJzdmV2dHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNDM4MDQsImV4cCI6MjA5ODgxOTgwNH0.dPsPpV1TorY_1nxAzN3eaeGDZR5gz0R_8mGJdyaEXio", 
  LIFF_ID: "2010395332-urAIJlTe",

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
    { id: 'sterilization', name: 'ทำหมัน', emoji: '✂️', bal: null, quota: 'ตามแพทย์สั่ง' },
    { id: 'ordination', name: 'อุปสมบท', emoji: '🪷', bal: 'bal_ordination', quota: 120 },
    { id: 'hajj', name: 'ฮัจย์', emoji: '🕋', bal: 'bal_hajj', quota: 120 },
    { id: 'military', name: 'ฝึกทหาร', emoji: '🪖', bal: null, quota: 'ตามราชการ' }
  ]
};
