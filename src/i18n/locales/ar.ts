import type { en } from './en'

/** Same keys as English. Extra keys are allowed for Arabic plural forms (zero, two, few, many). */
type Locale = Record<keyof typeof en, string> & Record<string, string>

// DRAFT: written by Claude, not yet reviewed by a native speaker or the design team.
export const ar: Locale = {
  'nav.primary': 'التنقل الرئيسي',
  'nav.home': 'الرئيسية',
  'nav.design': 'نظام التصميم',
  'nav.about': 'عن التطبيق',

  'theme.label': 'المظهر',
  'theme.light': 'المظهر الفاتح',
  'theme.dark': 'المظهر الداكن',
  'theme.system': 'مطابقة مظهر الجهاز',
  'theme.auto': 'تلقائي',

  'language.label': 'تغيير اللغة',

  'home.eyebrow': 'ملاعب · مباريات · لاعبون',
  'home.titleLine1': 'جمّع فريقك.',
  'home.titleLine2': 'احجز الملعب.',
  'home.lede': 'شاهد المواعيد المتاحة في الأندية القريبة منك، وافتح مباراة للاعبين في مستواك، وادفع حصتك في خطوات قليلة.',
  'home.bookCourt': 'احجز ملعبًا',
  'home.seeDesign': 'استعرض نظام التصميم',

  'about.title': 'عن التطبيق',
  'about.body': '[نص التعريف بـ Padel Hub يوضع هنا.]',

  'notFound.title': 'خارج الملعب',
  'notFound.body': 'هذه الصفحة غير موجودة.',
  'notFound.back': 'العودة إلى الرئيسية',

  'signIn.hero': 'يلا نلعب',
  'signIn.heroLede': 'اختر حجزك وأضف لاعبيك، والتطبيق ينظّم كل جولة وكل شريك ومن يستريح.',
  'signIn.title': 'تسجيل الدخول',
  'signIn.intro': 'جديد هنا؟ الخطوة نفسها تنشئ حسابك.',
  'signIn.phoneLabel': 'رقم الموبايل',
  'signIn.phonePlaceholder': 'رقم موبايلك',
  'signIn.phoneHelper': 'سنرسل إليك رمزًا من 6 أرقام. لا حاجة لتذكّر كلمة مرور.',
  'signIn.phoneInvalid': 'أدخل رقم موبايل صحيحًا',
  'signIn.sendCode': 'أرسل الرمز',
  'signIn.sendingCode': 'جارٍ إرسال الرمز',
  'signIn.sendFailed': 'لم يُرسَل الرمز. تحقّق من الرقم وحاول مرة أخرى.',
  'signIn.or': 'أو',
  'signIn.google': 'المتابعة باستخدام Google',
  'signIn.legal': 'بالمتابعة، أنت توافق على <terms>الشروط</terms> و<privacy>سياسة الخصوصية</privacy>.',

  'verify.title': 'أدخل الرمز',
  'verify.sentTo': 'أرسلنا رمزًا من 6 أرقام إلى <phone>{{phone}}</phone>.',
  'verify.missingPhone': '[رقم الموبايل غير موجود. ابدأ من تسجيل الدخول.]',
  'verify.notDesigned': '[شاشة إدخال الرمز لم تُصمَّم بعد.]',
  'verify.changeNumber': 'تغيير الرقم',

  'status.open': 'متاحة',
  'status.full': 'مكتملة',
  'status.confirmed': 'مؤكدة',
  'status.almostFull': 'أوشكت على الاكتمال',
  'status.cancelled': 'ملغاة',

  'level.Starter': 'مبتدئ',
  'level.Improver': 'متطوّر',
  'level.Mid': 'متوسط',
  'level.Advanced': 'متقدّم',
  'level.Pro': 'محترف',

  'slot.available': 'متاح',
  'slot.peak': 'ذروة',
  'slot.booked': 'محجوز',
  'slot.selected': 'محدَّد',

  'match.spotsLeft_zero': 'لا أماكن متبقية',
  'match.spotsLeft_one': 'مكان واحد متبقٍ',
  'match.spotsLeft_two': 'مكانان متبقيان',
  'match.spotsLeft_few': '{{count}} أماكن متبقية',
  'match.spotsLeft_many': '{{count}} مكانًا متبقيًا',
  'match.spotsLeft_other': '{{count}} مكان متبقٍ',
  'match.spots_zero': 'لا أماكن',
  'match.spots_one': 'مكان واحد',
  'match.spots_two': 'مكانان',
  'match.spots_few': '{{count}} أماكن',
  'match.spots_many': '{{count}} مكانًا',
  'match.spots_other': '{{count}} مكان',
  'match.players': 'اللاعبون',
  'match.open': 'متاح',
  'match.perPlayer': 'للاعب',
  'match.join': 'انضم للمباراة',
  'match.full': 'مكتملة',
  'match.doubles': 'زوجي',

  'court.startTimes': 'مواعيد البدء',
  'court.book': 'احجز الملعب',
  'court.per90': '/ 90 دقيقة',
  'court.Indoor': 'مغطى',
  'court.Outdoor': 'مكشوف',

  'avatar.openSpot': 'مكان متاح',
}
