package radioradio.ru.bugs;

public interface RadioListener {

  void onRadioLoading();

  void onRadioConnected();

  void onRadioStarted();

  void onRadioStopped(boolean closedFromNotification);

  void onMetaDataReceived(String s, String s2);

  void onError();
}
