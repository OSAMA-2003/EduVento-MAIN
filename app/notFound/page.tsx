import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">الصفحة غير موجودة</h2>
      <p className="text-gray-600 text-lg mb-8">عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها.</p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}