import type { en } from './en'

/** Same keys as English. Extra keys are allowed for Arabic plural forms (zero, two, few, many). */
type Locale = Record<keyof typeof en, string> & Record<string, string>

// DRAFT: written by Claude, not yet reviewed by a native speaker or the design team.
export const ar: Locale = {
  navPrimary: 'التنقل الرئيسي',
  navHome: 'الرئيسية',
  navDesign: 'نظام التصميم',
  navAbout: 'عن التطبيق',

  themeLabel: 'المظهر',
  themeLight: 'المظهر الفاتح',
  themeDark: 'المظهر الداكن',
  themeSystem: 'مطابقة مظهر الجهاز',
  themeAuto: 'تلقائي',

  languageLabel: 'تغيير اللغة',

  homeEyebrow: 'ملاعب · مباريات · لاعبون',
  'homeTitleLine1': 'جمّع فريقك.',
  'homeTitleLine2': 'احجز الملعب.',
  homeLede: 'شاهد المواعيد المتاحة في الأندية القريبة منك، وافتح مباراة للاعبين في مستواك، وادفع حصتك في خطوات قليلة.',
  homeBookCourt: 'احجز ملعبًا',
  homeSeeDesign: 'استعرض نظام التصميم',

  aboutTitle: 'عن التطبيق',
  aboutBody: '[نص التعريف بـ Padel Hub يوضع هنا.]',

  notFoundTitle: 'خارج الملعب',
  notFoundBody: 'هذه الصفحة غير موجودة.',
  notFoundBack: 'العودة إلى الرئيسية',

  signInHero: 'يلا نلعب',
  signInHeroLede: 'اختر حجزك وأضف لاعبيك، والتطبيق ينظّم كل جولة وكل شريك ومن يستريح.',
  signInTitle: 'تسجيل الدخول',
  signInIntro: 'جديد هنا؟ الخطوة نفسها تنشئ حسابك.',
  signInPhoneLabel: 'رقم الموبايل',
  signInPhonePlaceholder: 'رقم موبايلك',
  signInPhoneHelper: 'سنرسل إليك رمزًا من 6 أرقام. لا حاجة لتذكّر كلمة مرور.',
  signInPhoneInvalid: 'أدخل رقم موبايل صحيحًا',
  signInSendCode: 'أرسل الرمز',
  signInSendingCode: 'جارٍ إرسال الرمز',
  signInSendFailed: 'لم يُرسَل الرمز. تحقّق من الرقم وحاول مرة أخرى.',
  signInOr: 'أو',
  signInGoogle: 'المتابعة باستخدام Google',
  signInLegal: 'بالمتابعة، أنت توافق على <terms>الشروط</terms> و<privacy>سياسة الخصوصية</privacy>.',

  verifyTitle: 'أدخل الرمز',
  verifySentTo: 'أرسلنا رمزًا من 6 أرقام إلى <phone>{{phone}}</phone>.',
  verifyMissingPhone: '[رقم الموبايل غير موجود. ابدأ من تسجيل الدخول.]',
  verifyNotDesigned: '[شاشة إدخال الرمز لم تُصمَّم بعد.]',
  verifyChangeNumber: 'تغيير الرقم',

  statusOpen: 'متاحة',
  statusFull: 'مكتملة',
  statusConfirmed: 'مؤكدة',
  statusAlmostFull: 'أوشكت على الاكتمال',
  statusCancelled: 'ملغاة',

  levelStarter: 'مبتدئ',
  levelImprover: 'متطوّر',
  levelMid: 'متوسط',
  levelAdvanced: 'متقدّم',
  levelPro: 'محترف',

  slotAvailable: 'متاح',
  slotPeak: 'ذروة',
  slotBooked: 'محجوز',
  slotSelected: 'محدَّد',

  matchSpotsLeft_zero: 'لا أماكن متبقية',
  matchSpotsLeft_one: 'مكان واحد متبقٍ',
  matchSpotsLeft_two: 'مكانان متبقيان',
  matchSpotsLeft_few: '{{count}} أماكن متبقية',
  matchSpotsLeft_many: '{{count}} مكانًا متبقيًا',
  matchSpotsLeft_other: '{{count}} مكان متبقٍ',
  matchSpots_zero: 'لا أماكن',
  matchSpots_one: 'مكان واحد',
  matchSpots_two: 'مكانان',
  matchSpots_few: '{{count}} أماكن',
  matchSpots_many: '{{count}} مكانًا',
  matchSpots_other: '{{count}} مكان',
  matchPlayers: 'اللاعبون',
  matchOpen: 'متاح',
  matchPerPlayer: 'للاعب',
  matchJoin: 'انضم للمباراة',
  matchFull: 'مكتملة',
  matchDoubles: 'زوجي',

  courtStartTimes: 'مواعيد البدء',
  courtBook: 'احجز الملعب',
  'courtPer90': '/ 90 دقيقة',
  courtIndoor: 'مغطى',
  courtOutdoor: 'مكشوف',

  avatarOpenSpot: 'مكان متاح',
}
