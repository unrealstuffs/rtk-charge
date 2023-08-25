import { HStack, VStack } from 'shared/ui/Stack'
import cls from './Properties.module.scss'
import { Typography, useThemeContext } from '@design-system-rt/rtk-ui-kit'

interface ParametersProps {
	parameters: { [key: string]: string }
	max?: number
}

export const Properties = (props: ParametersProps) => {
	const { parameters, max = -1 } = props
	const { themeConfig } = useThemeContext()

	return (
		<VStack className={cls.properties}>
			{parameters &&
				Object.entries(parameters)
					.slice(0, max)
					.map(([key, value]) => (
						<HStack justify='between' max key={key}>
							<Typography
								variant='bodyM'
								color={themeConfig.greyScale[40]}
							>
								{key}
							</Typography>
							<div className={cls.dashed}></div>
							<Typography
								variant='bodyM'
								color={themeConfig.greyScale[40]}
							>
								{value}
							</Typography>
						</HStack>
					))}
		</VStack>
	)
}
