export default function SkillCard({ nama, level }) {
    return (
        <div className="rounded-xl border border-border
 text-primary bg-background p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-primary ">{nama}</h3>
            <p className="mt-1 text-sm text-muted-foreground ">Level: {level}</p>
        </div>
    )
} 