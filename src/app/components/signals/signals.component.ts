import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ColumnElement} from '../../interfaces/ColumnElement';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SignalElement} from '../../interfaces/SignalElement';
import {SignalsService} from '../../services/signals.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements OnInit, AfterViewInit {
  dataSource: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  lastSortColumn: string | undefined;
  constructor(private router: Router, private signals: SignalsService) {
    signals.messages.subscribe((msg) => {
      console.log(msg);
    });
    this.dataSource = new MatTableDataSource<SignalElement>(this.testData());
    this.lastSortColumn = undefined;
    this.inputFilter = '';
  }
  cols: ColumnElement[] = [
      {eng: 'company', fa: 'نماد', fa_rep: 'نماد'},
      {eng: 'board_power', fa: 'قدرت', fa_rep: 'قدرت خریدار حقیقی روی تابلو'},
      {eng: 'board_per_purchase_cost', fa: 'سرانه خرید', fa_rep: 'سرانه خرید حقیقی روی تابلو'},
      {eng: 'board_number_purchases', fa: 'تعداد خریدار',  fa_rep: 'تعداد خریدار حقیقی روی تابلو'},
      {eng: 'trade_price', fa: ' معامله',  fa_rep: 'قیمت معامله'},
      {eng: 'final_price', fa: 'پایانی',  fa_rep: 'قیمت پایانی'},
      {eng: 'opening_price', fa: 'بازگشایی',  fa_rep: 'قیمت بازگشایی'},
      {eng: 'low_price', fa: 'کف',  fa_rep: 'کف قیمت لمس شده امروز'},
      {eng: 'high_price', fa: 'سقف', fa_rep: 'سقف قیمت لمس شده امروز'},
      {eng: 'recent_power', fa: 'قدرت', fa_rep: 'قدرت خریدار حقیقی در 5 دقیقه اخیر'},
      {eng: 'recent_per_purchase_cost', fa: 'سرانه', fa_rep: 'سرانه خرید حقیقی در 5 دقیقه اخیر'},
      {eng: 'recent_number_purchases', fa: 'تعداد', fa_rep: 'تعداد خریداران حقیقی در 5 دقیقه اخیر'},
      {eng: 'now_power', fa: 'قدرت', fa_rep: 'قدرت خریدار حقیقی در 30 ثانیه اخیر'},
      {eng: 'now_per_purchase_cost', fa: 'سرانه', fa_rep: 'سرانه خرید حقیقی در 30 ثانیه اخیر'},
      {eng: 'now_number_purchases', fa: 'تعداد', fa_rep: 'تعداد خریداران حقیقی در 30 ثانیه اخیر'},
      {eng: 'time', fa: 'زمان', fa_rep: 'زمان'},
      {eng: 'signal_type', fa: 'سیگنال', fa_rep: 'نوع سیگنال'},
      {eng: 'score', fa: 'امتیاز', fa_rep: 'امتیاز'},
  ];
  displayedColumns: string[] = [];
  vipSignal = false;
  strongSignal = false;
  superSignal = true;
  inputFilter: string;

  ngOnInit(): void {
    for (const col of this.cols){
      this.displayedColumns.push(col.eng);
    }
    this.testData();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.filterBySignalType('super');
  }

  ngAfterViewInit(): void {
    if (this.paginator !== undefined){
      this.paginator._intl.itemsPerPageLabel = 'تداد سطرهای هر صفحه';
      this.paginator._intl.nextPageLabel = 'صفحه بعد';
      this.paginator._intl.previousPageLabel = 'صفحه قبل';
      this.paginator._intl.firstPageLabel = 'صفحه اول';
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (dt: SignalElement, filter: string): boolean => {
      console.log(filter);
      if (this.inputFilter.trim().toLowerCase() === '') {
        return (dt.signal_type === 'vip' && this.vipSignal) || (dt.signal_type === 'strong' && this.strongSignal) || (dt.signal_type === 'super' && this.superSignal)
      } else {
        const res1 = dt.recent_power.trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.recent_per_purchase_cost.trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.recent_number_purchases.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.now_power.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.now_per_purchase_cost.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.now_number_purchases.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.board_power.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.board_per_purchase_cost.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.board_number_purchases.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.opening_price.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.trade_price.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.final_price.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.high_price.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.low_price.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.time.toString().trim().toLowerCase().includes(filter.trim().toLowerCase())
          || dt.company.toString().trim().toLowerCase().includes(filter.trim().toLowerCase());
        if (dt.signal_type === 'vip'){
          return res1 && this.vipSignal;
        } else if (dt.signal_type === 'strong'){
          return res1 && this.strongSignal;
        } else {
          return res1 && this.superSignal;
        }
      }
    };
  }


  goToDetailsPage(element: any): void {
    this.router.navigate(['signal-details']);

  }

  private testData(): Array<SignalElement>{
    const array: Array<SignalElement> = new Array<SignalElement>();
    for (let i = 0; i < 1; ++i){
      array.push({
        company: 'ولساپا',
        board_power: '1.4',
        board_per_purchase_cost: '100',
        board_number_purchases: '1200',
        recent_power: '4.8',
        recent_per_purchase_cost: '200',
        recent_number_purchases: '11',
        now_power: '8.0',
        now_per_purchase_cost: '900',
        now_number_purchases: '100',
        trade_price: '4850',
        final_price: '4600',
        opening_price: '4300',
        low_price: '4250',
        high_price: '5000',
        time: '12:23:21',
        url: '',
        signal_type: 'vip',
        score: '8.0'
      });
      array.push({
        company: 'ونوین',
        board_power: '3.4',
        board_per_purchase_cost: '150',
        board_number_purchases: '12',
        recent_power: '2.3',
        recent_per_purchase_cost: '123',
        recent_number_purchases: '12',
        now_power: '3.9',
        now_per_purchase_cost: '13',
        now_number_purchases: '1',
        trade_price: '3240',
        final_price: '3590',
        opening_price: '3210',
        low_price: '3000',
        high_price: '4000',
        time: '12:22:41',
        url: '',
        signal_type: 'super',
        score: '7.0'
      });
      array.push({
        company: 'شپنا',
        board_power: '2.1',
        board_per_purchase_cost: '15',
        board_number_purchases: '88',
        recent_power: '1.2',
        recent_per_purchase_cost: '8',
        recent_number_purchases: '12',
        now_power: '2.8',
        now_per_purchase_cost: '30',
        now_number_purchases: '17',
        trade_price: '10000',
        final_price: '12000',
        opening_price: '9800',
        low_price: '10000',
        high_price: '15000',
        time: '11:35:31',
        url: '',
        signal_type: 'strong',
        score: '-1.0'
      });
    }
    return array;

  }

  filterByInput($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    const f = filterValue.trim().toLowerCase();
    if (f !== ''){
      this.dataSource.filter = f;
    } else {
      this.dataSource.filter = 'super';
    }
  }

  orderData(id: string | undefined, start?: 'asc' | 'desc'): void {
    if (id === undefined){
      return;
    }
    if (start === undefined || start === null){
      start = 'asc';
    }
    this.lastSortColumn = id;
    const matSort = this.dataSource.sort;
    const toState = 'active';
    const disableClear = false;

    matSort.sort({ id: null, start, disableClear });
    matSort.sort({ id, start, disableClear });

    this.dataSource.sort = matSort;
  }

  filterBySignalType(signalType: string): void {
    if (!this.vipSignal && !this.strongSignal && !this.superSignal){
      this.superSignal = true;
    }
    if (this.inputFilter.trim().toLowerCase() !== ''){
      this.dataSource.filter = this.inputFilter.trim().toLowerCase();
    } else {
      this.dataSource.filter = 'super';
    }
  }
}
