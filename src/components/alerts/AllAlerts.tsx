import { Alert } from '@chakra-ui/react';
import { AlertCustom } from './AlertCustom';

interface AllAlertsProp {
  title: string;
  value: string;
  successAlertPropActive?: boolean;
  errorAlertPropActive?: boolean;
  infoAlertPropActive?: boolean;
  warningAlertPropActive?: boolean;
}

export const AllAlerts = (allAlertsProp: AllAlertsProp) => {
  const {
    successAlertPropActive = false,
    errorAlertPropActive = false,
    infoAlertPropActive = false,
    warningAlertPropActive = false,
  } = allAlertsProp;

  return (
    <>
      {successAlertPropActive && (
        <AlertCustom status="success" title={allAlertsProp.title} value={allAlertsProp.value} />
      )}
      {errorAlertPropActive && (
        <AlertCustom status="error" title={allAlertsProp.title} value={allAlertsProp.value} />
      )}
      {infoAlertPropActive && (
        <AlertCustom status="info" title={allAlertsProp.title} value={allAlertsProp.value} />
      )}
      {warningAlertPropActive && (
        <AlertCustom status="warning" title={allAlertsProp.title} value={allAlertsProp.value} />
      )}
    </>
  );
};
