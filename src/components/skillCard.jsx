export default function SkillCard({ nama, level }) {
    return (
        <div className="rounded-xl border border-gray-200 dark:border-slate-700
 text-utama dark:text-blue-200 bg-gray-100 dark:bg-slate-800 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-utama dark:text-blue-200 ">{nama}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 ">Level: {level}</p>
        </div>
    )
} 