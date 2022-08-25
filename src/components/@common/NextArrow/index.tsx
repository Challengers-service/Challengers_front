import { pallet } from "constants/pallet";

export interface Props extends React.SVGProps<SVGSVGElement> {
  fill?: string;
}

const NextArrow = ({ fill = pallet.mainColor }: Props) => {
  return (
    <svg
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.825 5.294L1.859 0.328L0.91 1.303L4.914 5.294L0.91 9.298L1.859 10.26L6.825 5.294Z"
        fill={fill}
      />
      <path
        d="M12.825 5.294L7.859 0.328L6.91 1.303L10.914 5.294L6.91 9.298L7.859 10.26L12.825 5.294Z"
        fill={fill}
        fill-opacity="0.75"
      />
      <path
        d="M18.825 5.294L13.859 0.328L12.91 1.303L16.914 5.294L12.91 9.298L13.859 10.26L18.825 5.294Z"
        fill={fill}
        fill-opacity="0.5"
      />
    </svg>
  );
};

export default NextArrow;
