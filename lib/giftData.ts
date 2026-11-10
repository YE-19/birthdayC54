// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Jana",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `Happy birthday to my beautiful girl, my love, and my whole world. ❤️

I honestly can’t put into words how much I love you or how much you mean to me. I’m so happy that you’re part of my life, and even happier that I get to be by your side today, celebrating your special day and sharing these beautiful moments with you.

You’re not just my girlfriend. You’re my best friend, my sister, my future wife, my comfort, my safe place, and everything I could ever wish for. You’re my favorite person, and I can’t imagine my life without you.

I love every little detail about you, your smile, your laugh, your voice, and everything that makes you who you are. All I wish for is to see you happy, achieve all your dreams, and be by your side through every moment, the good and the bad.

I hope I get to celebrate every birthday with you, make countless memories together, and grow old beside you. I’m so grateful that you were born, and even more grateful that I get to love you.

May God always protect your beautiful heart and keep that smile on your face. I love you more than words could ever explain.

Happy birthday, my everything. Here’s to you, to us, and to a lifetime of loving each other. ❤️❤️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;