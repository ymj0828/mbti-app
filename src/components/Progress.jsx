import styled from "styled-components";
const MyProgress = styled.div`
  margin-top: 3rem;
`;
const Fill = styled.div`
  width: 100%;
  height: 10px;
  background-color: #777;
  margin-top: 1rem;
  text-align: left;
`;

const Gauge = styled.div`
  background-color: skyblue;
  display: inline-block;
  position: relative;
  height: inherit;
  top: -4px;
  width: ${(props) => props.percent}%;
`;
export default function Progress({ page, maxPage }) {
  return (
    <MyProgress>
      <div>
        {page} / {maxPage}
      </div>
      <Fill>
        <Gauge percent={(page / maxPage) * 100}></Gauge>
      </Fill>
    </MyProgress>
  );
}