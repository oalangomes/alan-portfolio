
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

interface alertProps {
    title: string
    status: 'error' | 'success' | 'warning' | 'info';
    value: string
}

export const AlertCustom = (alertProps: alertProps) => {
    return <Alert status={alertProps.status}>
        <AlertIcon />
        <AlertTitle>{alertProps.title}</AlertTitle>
        <AlertDescription>{alertProps.value}</AlertDescription>
    </Alert>
}

export { Alert };
