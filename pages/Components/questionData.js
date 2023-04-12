import React from 'react'

 const questionData = [
        {
            id:"1",
            question: "สิ่งที่ทำให้คุณอยากออกไปเที่ยวคืออะไร",
            choices: [
                { text: "ต้องการได้รับประทานอาหารท้องถิ่นที่ชื่นชอบ", weight: 1 },
                { text: "ต้องการพักผ่อน และสัมผัสบรรยากาศ/วิถีชีวิตวัฒนธรรมท้องถิ่น ", weight: 2 },
                { text: "ต้องการร่วมกิจกรรมการท่องเที่ยวชองชุมชนท้องถิ่น", weight: 3 },
                { text: "ต้องการร่วมกิจกรรมของชุมชน และรับประทานอาหารท้องถิ่น", weight: 4 }
            ]
        },
        {
            id:"2",
            question: "การวางแผนก่อนเดินทางท่องเที่ยวเชียงคาน คุณเน้นอะไรมากที่สุด",
            choices: [
                { text: "รายชื่อร้านอาหารที่ต้องไปชิม ", weight: 1 },
                { text: "รายชื่อที่พักที่บรรยากาศดี เหมาะกับการพักผ่อน", weight: 2 },
                { text: "รายชื่อแหล่งท่องเที่ยวที่มีกิจกรรมให้กับนักท่องเที่ยว ", weight: 3 },
                { text: "รายชื่อชุมชนที่มีกิจกรรมถ่ายทอดวิถีชีวิตและวัฒนธรรมท้องถิ่น", weight: 4 }
            ]
        },
        {
            id:"3",
            question: "กิจกรรมระหว่างเดินทางที่คุณมักจะทำ",
            choices: [
                { text: "จอดทุกที่ที่มีของกิน", weight: 1 },
                { text: "ใช้เวลาเดินทางสั้น มุ่งมั่นการพักผ่อน", weight: 2 },
                { text: "จอยทุกที่ที่มีกิจกรรม", weight: 3 },
                { text: "แวะเสริมประสบการณ์ ร่วมทำอาหารกับชุมชน", weight: 4 }
            ]
        },
        {
            id:"4",
            question: "ลักษณะของแหล่งท่องเที่ยวที่คุณชื่นชอบ",
            choices: [
                { text: "แหล่งท่องเที่ยวมีอาหารท้องถิ่นหลากหลาย ", weight: 1 },
                { text: "แหล่งท่องเที่ยวที่มีทัศนียภาพที่สวยงาม ", weight: 2 },
                { text: "แหล่งท่องเที่ยวที่มีกิจกรรมของชุมชนที่หลากหลาย", weight: 3 },
                { text: "แหล่งท่องเที่ยวที่ได้มีส่วนร่วมเรียนรู้วิถีชีวิตและวัฒนธรรมท้องถิ่น", weight: 4 }
            ]
        },
        {
            id:"5",
            question: "ถ้าคุณเดินทางมาท่องเที่ยวเชียงคาน คุณจะเลือกร้านอาหารแบบไหน",
            choices: [
                { text: "ร้านอาหารที่มีเมนูอาหารขึ้นชื่อ", weight: 1 },
                { text: "ร้านอาหารที่มีบรรยากาศดี", weight: 2 },
                { text: "ร้านอาหารท้องถิ่นที่มีกิจกรรมที่เปิดโอกาสให้มีส่วนร่วม ", weight: 3 },
                { text: "ร้านอาหารที่มีกิจกรรมให้มีส่วนร่วมชิมและปรุงอาหารเอง", weight: 4 }
            ]
        },
        {
            id:"6",
            question: "สิ่งแรกที่คุณทำเมื่อมาถึงเชียงคาน",
            choices: [
                { text: "ตะลอนชิมอาหารท้องถิ่น ", weight: 1 },
                { text: "เข้าโรงแรมที่พักเพื่อพักผ่อน หรือนั่งชมบรรยากาศ", weight: 2 },
                { text: "ทำกิจกรรมร่วมกับคนในชุมชน เช่น รำวงโบราณ ทำอาหารท้องถิ่น ล่องเรือหาปลา", weight: 3 },
                { text: "ร่วมทำกิจกรรม เช่น ทำอาหารท้องถิ่นเพื่อรับประทาน", weight: 4 }
            ]
        },
        {
            id:"7",
            question: "ในระหว่างเดินทางท่องเที่ยว คุณเลือกรับประทานอาหารแบบไหน",
            choices: [
                { text: "อาหารตามกระแสนิยมจากการรีวิวในโซเชียลมีเดียRed", weight: 1 },
                { text: "อาหารที่เคยรับประทาน", weight: 2 },
                { text: "ไม่เน้นอาหาร เน้นการมีส่วนร่วมกับกิจกรรมของท้องถิ่น", weight: 3 },
                { text: "เน้นอาหารท้องถิ่นจากการมีส่วนร่วมด้วยตนเอง", weight: 4 }
            ]
        },
        {
            id:"8",
            question: "กิจกรรมการท่องเที่ยวในเชียงคานที่คุณให้ความสนใจมากที่สุด",
            choices: [
                { text: "ชิมอาหารขึ้นชื่อ เช่น ข้าวปุ้น น้ำแจ่ว ข้าวต้มมัด ปลาเนื้ออ่อนลุ่มน้ำโขง", weight: 1 },
                { text: "พักผ่อน เช่น ชมบรรยากาศริมโขง ปั่นจักรยานตามเส้นทางเลียบน้ำโขง", weight: 2 },
                { text: "ทำกิจกรรมการท่องเที่ยวร่วมกับชุมชน เช่น ทำผาสาดลอยเคราะห์ ทอผ้า หน้ากากผีขนน้ำ", weight: 3 },
                { text: "มีส่วนร่วมกับกิจกรรมอาหารท้องถิ่น เช่น ร่วมทำข้าวปุ้น-น้ำแจ่ว ห่อข้าวต้มมัด", weight: 4 }
            ]
        },
        {
            id:"9",
            question: "หลังจากเดินทางกลับจากการเที่ยวเชียงคานคุณทำสิ่งใด",
            choices: [
                { text: "แชร์ภาพอาหารลงใน Social Media", weight: 1 },
                { text: "พักผ่อน", weight: 2 },
                { text: "เล่าประสบการณ์เกี่ยวกับการทำกิจกรรมที่ประทับใจให้ผู้อื่นฟัง", weight: 3 },
                { text: "มอบของฝากหรือของที่ระลึกจากการ D.I.Y ให้กับคนใกล้ชิด", weight: 4 }
            ]
        },
        {
            id:"10",
            question: "ประสบการณ์ที่ประทับใจในการเที่ยวเชียงคาน",
            choices: [
                { text: "อิ่มอร่อยไปกับอาหารท้องถิ่น", weight: 1 },
                { text: "ดื่มด่ำความสวยงามของบรรยากาศริมแม่น้ำโขง ", weight: 2 },
                { text: "สนุกกับการทำกิจกรรมร่วมกับชุมชน", weight: 3 },
                { text: "ฟินกับการทำกิจกรรมพร้อมเปิดประสบการณ์ใหม่ในการกิน", weight: 4 }
            ]
        },
        {
            id:"11",
            question: "คอนเทนต์แบบไหนที่คุณชื่นชอบ",
            choices: [
                { text: "รีวิวอาหารสุดฟินกินอร่อย ", weight: 1 },
                { text: "รีวิวสถานที่พักผ่อนสุดชิล บรรยากาศผ่อนคลาย", weight: 2 },
                { text: "รีวิวกิจกรรมในแหล่งท่องเที่ยว", weight: 3 },
                { text: "รีวิวกิจกรรมที่สร้างการเรียนรู้วิถีชีวิตและวัฒนธรรมท้องถิ่นสำหรับนักท่องเที่ยว", weight: 4 }
            ]
        },
        {
            id:"12",
            question: "สโลแกนในการท่องเที่ยวของคุณคืออะไร",
            choices: [
                { text: "เน้นกิน ไม่เน้นเที่ยว ขอนั่งเคี้ยวอย่างเดียวพอ", weight: 1 },
                { text: "ท่องเที่ยวแบบชิล ๆ ไม่อินกับการกินและกิจกรรม", weight: 2 },
                { text: "เที่ยวสนุกทุกกิจกรรม แต่ไม่นำด้วยของกิน", weight: 3 },
                { text: "ชอบกิน ชอบเที่ยว ชอบเฟี้ยวทุกกิจกรรม", weight: 4 }
            ]
        },
    ]
    export default questionData;