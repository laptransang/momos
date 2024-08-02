const CheckboxComponent = ({ info }) => (
  <span>
    <input type="checkbox" checked={info.getValue().checkbox} readOnly />
  </span>
);

export default CheckboxComponent
