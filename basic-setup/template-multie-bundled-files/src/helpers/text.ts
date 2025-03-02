// Function to validate if a serial number is correctly formatted
export function validateSerialNumber(serial: string): boolean {
  const regex = /^SN\d{3,}$/; // Must start with "SN" followed by at least 3 digits
  return regex.test(serial);
}

// Function to ensure a serial number has the correct "SN" prefix
export function formatSerialNumber(serial: string | number): string {
  let serialStr = serial.toString().trim(); // Convert number to string if needed
  if (!serialStr.startsWith("SN")) {
    serialStr = `SN${serialStr}`;
  }
  return serialStr;
}
