function average(kor, eng, math){
  const avg = (kor + eng + math) / 3.0;
  if (avg <= 50) {
    return '종합반';
  } else if(avg >=50) {
      if (kor <=50 || eng <= 50 || math <= 50){
        return '단과반';
      } else {
        return '보충수업 없음';
      }
    }
}



function leapYear(year) {
  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 === 0)) {
    return true;
  } else if (year % 100 ===0) {
    return false;
  }
}

leapYear(2020);
