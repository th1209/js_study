/******************************************************
 ファイルを分割する
 ******************************************************/

//htmlファイル内で、先に依存するスクリプトを読み込めばOK
//ただし、互いに依存し合うクラスだと、この方法が使えない。
//  ex)Stateパターン
//また、htmlファイルに依存した方法であることにも注意。
var driver = new Driver();
driver.doHoge();