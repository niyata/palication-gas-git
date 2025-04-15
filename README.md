# Pali GAS Exporter

ระบบแยกและแปลงไฟล์ตำราบาลีจาก PDF เป็น JSON/SQL พร้อมส่ง Flex Message ผ่าน LINE OA

## คำสั่งสำคัญ
- `clasp push`  → ส่งโค้ดทั้งหมดขึ้น GAS
- `clasp pull`  → ดึงโค้ดจาก GAS ลงเครื่อง
- `./deploy.sh` → คำสั่งลัดสำหรับ deploy

## ไม่ควร commit
- `.clasp.json` (เก็บ Token และ Script ID เฉพาะผู้ใช้)