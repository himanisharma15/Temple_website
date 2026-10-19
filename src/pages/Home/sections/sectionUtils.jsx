import { Landmark, Waves, Heart, Sparkles, Circle, Moon, Sun, Sunrise, CircleDot, Flower2, Lamp } from 'lucide-react';
import Placeholder from '../../../components/Placeholder/Placeholder';

export const icons = { Landmark, Waves, Heart, Sparkles, Circle, Moon, Sun, Sunrise, CircleDot, Flower2, Lamp };

export function DataText({ value }) {
  if (typeof value !== 'string') return null;
  if (value.startsWith('[ADD FROM TEMPLE]')) {
    return <Placeholder kind="add">{value.replace('[ADD FROM TEMPLE] ', '')}</Placeholder>;
  }
  return value;
}

export function MissingTranslation({ children }) {
  return <Placeholder kind="translate">{children}</Placeholder>;
}
