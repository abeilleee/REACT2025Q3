import { useEffect, useMemo, useState, type FC } from 'react';
import { MIN_PASSWORD_LENGTH, PASSWORD_REGEX, STRENGTH } from '@/features/lib';

type PasswordIndicatorProps = {
  password: string;
};

export const PasswordIndicator: FC<PasswordIndicatorProps> = ({ password }) => {
  const [width, setWidth] = useState(STRENGTH.EMPTY);

  const calculateStrength = useMemo(() => {
    if (!password) {
      return STRENGTH.EMPTY;
    }

    let count = STRENGTH.EMPTY;

    if (password.length >= MIN_PASSWORD_LENGTH) {
      count++;
    }
    if (/[0-9]/.test(password)) {
      count++;
    }
    if (/[a-z]/.test(password)) {
      count++;
    }
    if (/[A-Z]/.test(password)) {
      count++;
    }
    if (PASSWORD_REGEX.test(password)) {
      count++;
    }

    return count;
  }, [password]);

  const color = useMemo(() => {
    switch (calculateStrength) {
      case STRENGTH.EMPTY:
      case STRENGTH.VERY_WEAK:
      case STRENGTH.WEAK:
        return 'bg-red-500';
      case STRENGTH.MEDIUM:
      case STRENGTH.STRONG:
        return 'bg-yellow-500';
      case STRENGTH.VERY_STRONG:
        return 'bg-green-500';
      default:
        return 'bg-gray-400';
    }
  }, [calculateStrength]);

  useEffect(() => {
    const newWidth = (calculateStrength / STRENGTH.VERY_STRONG) * 100;
    setWidth(newWidth);
  }, [password, calculateStrength]);

  return (
    <div
      className="h-2.5 w-full overflow-hidden rounded-md bg-gray-400/50"
      data-testid="indicator"
    >
      <div
        data-testid="bar"
        className={`h-2.5 rounded-md transition-all duration-300 ${color}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};
