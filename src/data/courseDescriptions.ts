export type Lang = "ar" | "en";

export type CourseKey =
  | "standard-general-english"
  | "intensive-general-english"
  | "ielts"
  | "combination-course"
  | "cambridge-preparation";

type L<T = string> = { en: T; ar: T };

export const courseDescriptions: Record<CourseKey, L> = {
  "standard-general-english": {
    en: "The Standard General English course is designed to improve your overall English language skills, focusing on speaking, listening, reading, and writing. This course is ideal for learners who want to enhance their daily communication skills, travel abilities, or future academic and career goals. Courses typically last a modest number of hours per week, allowing students time for independent study, exploration, or part-time work. Emphasis is placed on practical language use, grammatical accuracy, vocabulary development, and fluency.",
    ar: "تم تصميم دورة اللغة الإنجليزية العامة القياسية لتحسين مهاراتك العامة في اللغة الإنجليزية، مع التركيز على التحدث والاستماع والقراءة والكتابة. تعد هذه الدورة مثالية للمتعلمين الذين يرغبون في تعزيز مهاراتهم في التواصل اليومي، أو قدراتهم على السفر، أو تحقيق أهدافهم الأكاديمية والمهنية المستقبلية. تستمر الدورات عادةً لعدد معتدل من الساعات أسبوعيًا، مما يتيح للطلاب وقتًا للدراسة المستقلة أو الاستكشاف أو العمل الجزئي. يتم التركيز على الاستخدام العملي للغة، والدقة النحوية، وتطوير المفردات، والطلاقة في التعبير.",
  },
  "intensive-general-english": {
    en: "The Intensive General English course is designed for students who want to make rapid progress in all areas of English — speaking, listening, reading, and writing. This course offers more classroom hours per week, providing greater immersion and faster improvement. It is ideal for learners preparing for academic study, professional opportunities, or those wishing to achieve fluency in a shorter time. Emphasis is placed on communication skills, pronunciation, grammar, vocabulary expansion, and real-life language practice through interactive lessons and activities.",
    ar: "تم تصميم دورة اللغة الإنجليزية العامة المكثفة للطلاب الذين يرغبون في تحقيق تقدم سريع في جميع مهارات اللغة الإنجليزية – التحدث، الاستماع، القراءة، والكتابة. توفر هذه الدورة عددًا أكبر من الساعات الدراسية أسبوعيًا، مما يمنح الطلاب تجربة تعلم مكثفة وتطورًا أسرع. وهي مثالية للمتعلمين الذين يستعدون للدراسة الأكاديمية، أو الفرص المهنية، أو الذين يسعون إلى تحقيق الطلاقة في وقت أقصر. يتم التركيز على مهارات التواصل، والنطق السليم، والقواعد اللغوية، وتوسيع المفردات، وممارسة اللغة في مواقف حياتية حقيقية من خلال دروس وأنشطة تفاعلية.",
  },
  ielts: {
    en: "The IELTS Preparation course is specifically designed for students who aim to achieve a high score on the IELTS exam — a globally recognized English language test required for university admission, work, or visa applications in English-speaking countries. The course focuses on all four components of the test — Listening, Reading, Writing, and Speaking — providing targeted strategies, intensive practice, and personalized feedback to help students reach their desired band score. Learners will gain familiarity with the test format, question types, and effective time management techniques. Emphasis is placed on academic English, vocabulary expansion, and exam-style tasks that simulate real test conditions, ensuring students are fully prepared for success.",
    ar: "تم تصميم دورة التحضير لاختبار الآيلتس خصيصًا للطلاب الذين يهدفون إلى تحقيق درجة مرتفعة في اختبار IELTS، وهو اختبار عالمي معتمد لإثبات مستوى اللغة الإنجليزية ويُطلب عادة للقبول الجامعي أو لأغراض العمل أو الحصول على التأشيرة في الدول الناطقة بالإنجليزية. تركز الدورة على جميع أقسام الاختبار الأربعة – الاستماع، القراءة، الكتابة، والتحدث – من خلال استراتيجيات دقيقة، وتدريب مكثف، وتغذية راجعة مخصصة لمساعدة الطلاب على الوصول إلى الدرجة المطلوبة. يتعرف المتعلمون على هيكل الاختبار وأنواع الأسئلة وأساليب إدارة الوقت بفعالية. يتم التركيز على اللغة الأكاديمية، وتوسيع المفردات، والتدريب على مهام مشابهة لأسئلة الامتحان الفعلية لضمان استعداد الطلاب التام للنجاح.",
  },
  "combination-course": {
    en: "The Combination Course offers the perfect balance between group learning and personalized instruction. It combines the Standard General English course with five hours of one-to-one private lessons each week. Students benefit from interactive group classes that develop general language skills — speaking, listening, reading, and writing — while the individual lessons allow for focused attention on specific needs, such as pronunciation, grammar, exam preparation, or professional communication. This flexible program is ideal for learners who want to make steady progress in a group setting while also receiving tailored support to reach their personal goals faster.",
    ar: "تقدّم دورة اللغة الإنجليزية المجمّعة توازنًا مثاليًا بين التعلم الجماعي والتدريب الفردي. تجمع هذه الدورة بين دورة اللغة الإنجليزية العامة القياسية و خمس ساعات من الدروس الخاصة الفردية أسبوعيًا. يستفيد الطلاب من الحصص الجماعية التفاعلية التي تطور مهارات اللغة الأساسية – التحدث، الاستماع، القراءة، والكتابة – بينما تتيح الدروس الفردية التركيز على الاحتياجات الخاصة، مثل النطق، أو القواعد، أو التحضير للاختبارات، أو التواصل المهني. يعد هذا البرنامج المرن مثاليًا للمتعلمين الذين يرغبون في التقدم بثبات ضمن مجموعة، مع الحصول على دعم مخصص لتحقيق أهدافهم الشخصية بشكل أسرع.",
  },
  "cambridge-preparation": {
    en: "The Cambridge Preparation Combination Course is designed for students aiming to succeed in the Cambridge English exams (such as B2 First, C1 Advanced, or C2 Proficiency) while improving their overall language skills. This program combines the Standard General English course with five hours of one-to-one private lessons each week. The group classes help build a strong foundation in grammar, vocabulary, and fluency, while the individual lessons focus on exam strategies, test techniques, and personalized feedback to target specific areas of improvement. This course is ideal for learners who want both structured group learning and tailored one-to-one support to achieve the best possible Cambridge exam results.",
    ar: "تم تصميم دورة التحضير لامتحان كامبريدج المجمّعة للطلاب الذين يهدفون إلى النجاح في اختبارات كامبريدج للغة الإنجليزية (مثل B2 First أو C1 Advanced أو C2 Proficiency) مع تحسين مهاراتهم العامة في اللغة. يجمع هذا البرنامج بين دورة اللغة الإنجليزية العامة القياسية و خمس ساعات من الدروس الخاصة الفردية أسبوعيًا. تساعد الحصص الجماعية على بناء أساس قوي في القواعد والمفردات والطلاقة، بينما تركز الدروس الفردية على استراتيجيات الامتحان وتقنيات الاختبار وتقديم ملاحظات مخصصة لتحسين الجوانب الفردية. تعد هذه الدورة مثالية للمتعلمين الذين يرغبون في الجمع بين التعلم المنظم في المجموعة والدعم الفردي المخصص لتحقيق أفضل النتائج الممكنة في اختبارات كامبريدج.",
  },
} as const;

// Helper with fallback (returns EN if AR missing, and vice versa)
export function getCourseDescription(key: CourseKey, lang: Lang): string {
  const entry = courseDescriptions[key];
  if (!entry) return "";
  return (entry as L)[lang] || (entry as L).en || "";
}
