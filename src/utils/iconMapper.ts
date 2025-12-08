import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

// 공통 아이콘 컴포넌트 타입
type IconComponent = LucideIcon | IconType;

/**
 * 아이콘 맵핑 유틸리티
 * 데이터에 아이콘을 주입하는 공통 로직
 * @template I - 아이콘 타입 (LucideIcon 또는 IconType)
 */
export function mapWithIcons<T, K extends string, I extends IconComponent = LucideIcon>(
  items: T[],
  getKey: (item: T) => K,
  iconMap: Record<K, I>,
  defaultIcon?: I
): (T & { icon: I })[] {
  return items.map((item) => ({
    ...item,
    icon: iconMap[getKey(item)] || defaultIcon || iconMap[getKey(item)],
  }));
}
