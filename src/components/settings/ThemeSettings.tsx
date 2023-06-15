import ThemeContrast from './ThemeContrast';
import ThemeRtlLayout from './ThemeRtlLayout';
import ThemeColorPresets from './ThemeColorPresets';
import SettingsDrawer from './drawer';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children }: Props) {
  return <ThemeColorPresets>{children}</ThemeColorPresets>;
}
