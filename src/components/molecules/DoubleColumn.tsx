export function DoubleColumn({
  left,
  right,
  sectionClassName,
  leftClassName = 'flex-1 space-y-10',
  rightClassName = 'flex-1 space-y-10',
}: {
  left: React.ReactNode
  right?: React.ReactNode
  sectionClassName?: string
  leftClassName?: string
  rightClassName?: string
}) {
  return (
    <div className={sectionClassName}>
      <aside className="flex-1 flex justify-center">
        <section className={leftClassName}>{left}</section>
      </aside>
      <aside className="flex-1 flex justify-center">
        <section className={rightClassName}>{right}</section>
      </aside>
    </div>
  )
}
