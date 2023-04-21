import { Checkbox, VisuallyHidden } from '@ariakit/react'
import { classNames } from '@standardnotes/snjs'

const Switch = ({
  checked,
  onChange,
  className,
  disabled = false,
  tabIndex,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
  disabled?: boolean
  tabIndex?: number
}) => {
  const isActive = checked && !disabled

  return (
    <label
      className={classNames(
        'relative box-content inline-block h-4.5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-solid border-transparent bg-clip-padding transition-colors duration-150 ease-out',
        'ring-2 ring-transparent focus-within:border-default focus-within:shadow-none focus-within:outline-none focus-within:ring-info',
        disabled ? 'opacity-50' : '',
        isActive ? 'bg-info' : 'bg-neutral',
        className,
      )}
    >
      <VisuallyHidden>
        <Checkbox
          checked={checked}
          onChange={(event) => {
            onChange(event.target.checked)
          }}
          tabIndex={tabIndex}
        />
      </VisuallyHidden>
      <div
        className={classNames(
          'absolute left-[2px] top-1/2 block h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-default transition-transform duration-150 ease-out',
          checked ? 'translate-x-[calc(2rem-1.125rem)]' : '',
        )}
      />
    </label>
  )
}

export default Switch
