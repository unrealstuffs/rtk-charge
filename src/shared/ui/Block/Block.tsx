import { ReactNode } from 'react'
import cls from './Block.module.scss'
import { classNames } from 'shared/lib/classNames'

interface BlockProps {
	children: ReactNode
	className?: string
}

const Block = (props: BlockProps) => {
	const { children, className } = props
	return (
		<div className={classNames(cls.Block, {}, [className])}>{children}</div>
	)
}

export default Block
