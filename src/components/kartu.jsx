export default function Kartu({ judul, children }) {
    return (
        <section className="rounded-xl border border-gray-200 dark:border-slate-700
 bg-white dark:bg-slate-900  p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-utama dark:text-blue-200 ">
                {judul}
            </h2>
            {children}
        </section>
    )
}