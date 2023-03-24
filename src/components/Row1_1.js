import "../assets/styles/Row1_1.css";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

export default function Row1_1() {
    return (
        <div className="row1_1_content">
            <div className="row1_1_content_1">
                <div className="row1_1_title">
                    <h3>서비스 방문수/유저수/활성사용자수</h3>
                </div>
                <button>지난주 그래프 겹쳐보기</button>
                <nav className="row1_1_graph_text">
                    <ul>
                        <li>페이지 방문 횟수</li>
                        <li>접속 유저 수</li>
                        <li>시청 완주 수</li>
                    </ul>
                </nav>
            </div>
            <div className="row1_1_content_2">
                <div className="chart">
                    <AreaChart/>
                </div>
            </div>
        </div>
    );
}