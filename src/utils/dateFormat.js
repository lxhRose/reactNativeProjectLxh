const DateFormat = {
  creatDate(str) { // 创建Date对象：str 必须是 yyyy-MM-dd hh:mm:ss 或者 yyyy-MM-dd 格式
    str = str.replace(/(^\s*)|(\s*$)/g, ""); // 去除两边空格
    let timeArr = str.split(' ');
    if (timeArr.length > 1) {
      let dateArr1 = timeArr[0].split('-'),
        dateArr2 = timeArr[1].split(':');
      if (dateArr1.length === 3 && dateArr2.length === 3) {
        return new Date( // new Date(yyyy,mth,dd,hh,mm,ss); 注意：这种方式下，必须传递整型；
          parseInt(dateArr1[0], 10), parseInt(dateArr1[1], 10) - 1,
          parseInt(dateArr1[2], 10), parseInt(dateArr2[0], 10),
          parseInt(dateArr2[1], 10), parseInt(dateArr2[2], 10)
        );
      } else {
        Utils.Massage.error({ title: '错误提示', content: `时间串格式错误` });
      }
    } else {
      let dateArr1 = timeArr[0].split('-');
      if (dateArr1.length === 3) {
        return new Date( // new Date(yyyy,mth,dd);
          parseInt(dateArr1[0], 10),
          parseInt(dateArr1[1], 10) - 1,
          parseInt(dateArr1[2], 10)
        );
      } else {
        Utils.Massage.error({ title: '错误提示', content: `时间串格式错误` });
      }
    }
  },
  getYesterday() { // 昨天 yyyy-MM-dd
    let myDate = new Date();
    myDate.setDate(myDate.getDate() - 1);
    return this.Format('yyyy-MM-dd', myDate);
  },
  addOrDecOneDate(currentDate, isAdd) {// 加一天/减一天
    let myDate = this.creatDate(currentDate);
    let date = myDate.getDate();
    myDate.setDate(isAdd ? (date + 1) : (date - 1));
    return this.Format('yyyy-MM-dd', myDate);
  },
  getWeek(dateObj = new Date()) {
    let day = dateObj.getDay();
    let Arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return Arr[day];
  },
  addSeconds(s, Obj = new Date(), value) {
    let seconds = Obj.getSeconds();
    if (value) {
      Obj.setSeconds(seconds + value / 1000);
    } else {
      Obj.setSeconds(seconds + 1);
    }
    return this.Format(s, Obj);
  },
  days(ymonthStr) { // 指定月的天数 ymonthStr: yyyy-mm
    let arr = ymonthStr.split('-');
    let myDate = new Date(arr[0], arr[1], 0);
    return myDate.getDate();
  },
  timeDifference(timeStart, timeEnd) { // 计算时间差
    let dateBegin = this.creatDate(timeStart),
      dateEnd = this.creatDate(timeEnd),
      dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    return dateDiff;
  },
  /**
   * 格式化时间串
   * @param {*} s 需要的时间格式字符串 (yyyy：年、MM：月、dd：日、hh：小时、mm：分钟、ss：秒钟)
   * @param {*} obj 时间对象
   */
  Format(s = 'yyyy-MM-dd', obj = new Date()) {
    let _s = s; // 必须新定义一个变量来接收结果
    let Arr = [
      { id: 'yyyy', num: s.indexOf('yyyy') > -1 ? this.lowTen(obj.getFullYear()) : '' },
      { id: 'MM', num: s.indexOf('MM') > -1 ? this.lowTen(obj.getMonth() + 1) : '' },
      { id: 'dd', num: s.indexOf('dd') > -1 ? this.lowTen(obj.getDate()) : '' },
      { id: 'hh', num: s.indexOf('hh') > -1 ? this.lowTen(obj.getHours()) : '' },
      { id: 'mm', num: s.indexOf('mm') > -1 ? this.lowTen(obj.getMinutes()) : '' },
      { id: 'ss', num: s.indexOf('ss') > -1 ? this.lowTen(obj.getSeconds()) : '' },
    ];
    Arr.map((item) => {
      if (item.num != '')
        _s = _s.replace(item.id, `${item.num}`);
    });
    return _s;
  },
  lowTen(value) { // 对小于10 的数处理+0
    return value < 10 ? '0' + value.toString() : value.toString();
  }
}

export default DateFormat;
