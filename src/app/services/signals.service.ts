import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
// import {HttpClient} from '@angular/common/http';

// interface Message {
//   author: string;
//   message: string;
// }

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  // SIGNAL_URL = 'ws://79.175.176.165:4001';
  // public messages: Subject<SignalElement[]>;
  // constructor(wsService: WebsocketService) {
  //   this.messages = wsService.connect(this.SIGNAL_URL).pipe(map(
  //     (response: MessageEvent): SignalElement[] => {
  //       const data = JSON.parse(response.data);
  //       const signalElements: Array<SignalElement> = [];
  //       for (const datum of data){
  //         const t = new Date(datum.board_buy_sell_status.end_time_stamp);
  //         signalElements.push({
  //           signal_type: datum.score_level.toLowerCase(),
  //           company: datum.name,
  //           time: t.getHours() + ' : ' +  t.getMinutes() + ' : ' + t.getSeconds(),
  //           high_price: datum.board_buy_sell_status.max_day_touced_in_percent.toFixed(1),
  //           trade_price: datum.board_buy_sell_status.trade_price_in_percent.toFixed(1),
  //           opening_price: datum.board_buy_sell_status.first_trade_in_percent.toFixed(1),
  //           board_number_purchases: datum.board_buy_sell_status.human_buy_count,
  //           board_per_purchase_cost: datum.board_buy_sell_status.get_average_buy_per_code_in_million_base,
  //           board_power: datum.board_buy_sell_status.get_human_buy_ratio_power.toFixed(1),
  //           low_price: datum.board_buy_sell_status.min_day_touced_in_percent.toFixed(1),
  //           final_price: datum.board_buy_sell_status.final_price_in_percent.toFixed(1),
  //           recent_power: datum['5m_buy_sell_status'].get_human_buy_ratio_power.toFixed(1),
  //           recent_number_purchases: datum['5m_buy_sell_status'].human_buy_count,
  //           recent_per_purchase_cost: datum['5m_buy_sell_status'].get_average_buy_per_code_in_million_base,
  //           now_number_purchases: datum['30s_buy_sell_status'].human_buy_count,
  //           now_per_purchase_cost: datum['30s_buy_sell_status'].get_average_buy_per_code_in_million_base,
  //           now_power: datum['30s_buy_sell_status'].get_human_buy_ratio_power.toFixed(1),
  //           score: datum.score.toFixed(1),
  //           url: ''
  //         });
  //       }
  //       console.log(data);
  //       return signalElements;
  //     }
  //   )) as Subject<SignalElement[]>;
  // }
  baseUrl = 'http://79.175.176.165:8000';

  constructor(private http: HttpClient) {
  }

  getStocksInfo(startTimeStamp: string, endTimeStamp: string,
                count: string, signalTypeList: Array<string>): Observable<any> {
    const data = {
      StartTimeStamp: startTimeStamp,
      EndTimeStamp: endTimeStamp,
      Count: count,
      SignalTypeList: signalTypeList,
    };
    return this.http.post(this.baseUrl + '/stockInfo', data);
  }
}
