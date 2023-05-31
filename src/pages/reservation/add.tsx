import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, {useState} from "react";
import Seo from "@/components/Seo";
import styles from "./add.module.css";
import moment from 'moment';
export default function add() {
    const [value, onChange] = useState(new Date());
    const [consult, setConsult] = useState('업무분류');
    const [consultFlag, setConsultFlag] = useState(false);
    const [reservationTime, seteRservationTime] = useState(
        [
            {
                0: "10:45 AM",
                1: "11:45 AM",
                2: "12:45 PM",
                3: "13:45 PM",
                4: "14:45 PM",
                5: "15:45 PM",
                6: "16:45 PM",
                7: "17:45 PM",
                8: "18:45 PM",
            }
        ]
    )

    const consultEvent = () => {
        setConsultFlag(consultFlag ? false : true);
    }

    return (
        <div>
            <Seo title="reservation" />
            <p className={`section-title ${styles.sectionTitle}`}>AI CFO 상담 예약하기</p>
            <div className={styles.infoWrap}>
                <p className={styles.title}>유의사항 안내</p>
                <p className={`txt-normal ${styles.desc}`}>상담하시기 전 유의사항 안내 드립니다.</p>
                <p className={`txt-normal ${styles.desc}`}>상담분류와 사전내용 입력은 필요하신 정보를 제공해 드릴 수 있는 기본자료이므로 효과적인 상담을 위해 정확한 정보 업로드 요청드립니다.</p>
                <p className={`txt-normal ${styles.desc}`}>1대1 상담이기에 상담가의 현황에 따라 예약 가능한 날짜와 시간이 변동될 수 있습니다.</p>
                <p className={`txt-normal ${styles.desc}`}>첨부파일은 pdf/word/ppt 파일 양식으로 부탁드리며 열리지 않는 파일을 첨부하신 경우, 첨부자료 바탕으로 상담이 불가하니 확인 후 파일 업로드 바랍니다.</p>
                <p className={`txt-normal ${styles.desc}`}>상담 예약환불은 불가하니, 예약 시간에 맞춰 상담에 참여해주십시오.</p>
            </div>
            <div className={`${styles.inputGroup}`}>
                <div>
                    <span className={`${styles.label}`}>상담 분류</span>
                    <div className={styles.customSelect}>
                        <p onClick={consultEvent} className={consultFlag ? `active txt-normal` : `txt-normal`}>{consult}</p>
                        {
                            consultFlag &&
                                <ul>
                                    <li>자금업무</li>
                                    <li>경영관리</li>
                                    <li>투자유치</li>
                                    <li>주주보고</li>
                                    <li>스톡옵션</li>
                                    <li>지분관리</li>
                                    <li>회계/세무</li>
                                    <li>예산관리</li>
                                </ul>
                        }
                    </div>
                </div>
                <div>
                    <span className={`${styles.label}`}>상담 예약</span>
                    <div className={styles.termItem}>
                        <input type="checkbox" id="inp_term01" name="termsService" checked={true} />
                        <label htmlFor="inp_term01" className={`txt-small`}>화상 상담 예약</label>
                    </div>
                    <div className={styles.termItem}>
                        <input type="checkbox" id="inp_term02" name="termsService" checked={false} />
                        <label htmlFor="inp_term02" className={`txt-small`}>전화 상담 예약</label>
                    </div><div className={styles.termItem}>
                    <input type="checkbox" id="inp_term03" name="termsService" checked={false} />
                    <label htmlFor="inp_term03" className={`txt-small`}>방문 상담 예약</label>
                </div>

                </div>
                <div>
                    <span className={`${styles.label}`}>일정 선택</span>
                    <Calendar
                        locale="ko"
                        value={new Date(value)}
                        formatDay={(locale, date) => moment(date).format('D')}
                        // onChange={onChange}
                    />
                    <p>예약 가능 시간</p>
                    <div>
                    {/*{*/}
                    {/*    reservationTime.map((data, idx) =>*/}
                    {/*        <span>{data[idx]}</span>*/}
                    {/*    )*/}
                    {/*}*/}
                    </div>
                </div>
                <div>
                    <span className={`${styles.label}`}>사전 내용</span>
                    <textarea></textarea>
                </div>
                <div>
                    <span className={`${styles.label}`}>파일 첨부</span>
                    <input type="file" accept=".pdf, .word, .ppt"/>
                </div>
            </div>
        </div>
    );
}