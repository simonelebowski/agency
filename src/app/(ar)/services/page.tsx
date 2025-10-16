import ServicesAll from "@/components/ServicesAll";

export const metadata = {
  title: "الخدمات | برايت باث",
  description: "كل خدماتنا في صفحة واحدة: اختيار الدورة، التأشيرة، السكن، الاستقبال.",
};

export default function Page() {
  return <ServicesAll lang="ar" />;
}
