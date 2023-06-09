import './label.css';

interface LabelProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * To UpperCase the label content
   */
  allCaps?: boolean;
  /**
   * What color of text to use
   */
  color?: 'primary' | 'secondary' | 'tertiary';
   /**
   * Choose custom color of text
   */
  customColor?: string;
  /**
   * How large should the label be?
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Label content
   */
  label: string;
  

}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
  backgroundColor = 'transparent', 
  size = 'normal',
  color = 'primary',
  customColor,
  label,
  allCaps = false,
  ...props
}: LabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}` }
      style={{ color: customColor, backgroundColor }}
      {...props}
    >
      {
        allCaps
        ? label.toUpperCase()
        : label
      }
    </span>
  );
};
