const Validator = {
  NUMBER_STRING: '0123456789',
  MIN_SIZE: 3,
  MAX_SIZE: 20,
  MOVING_STRING: 'UD',
  GAME_COMMAND_STRING: 'RQ',

  checkBridgeSize(input) {
    if (Validator.NUMBER_STRING.includes(input) === false) {
      throw new Error('다리 길이는 정수만 입력해야 합니다.');
    }
    const size = Number(input);
    if (size < Validator.MIN_SIZE || size > Validator.MAX_SIZE) {
      throw new Error(`다리 길이는 3 부터 20 사이의 숫자여야 합니다.`);
    }
  },

  checkMoving(input) {
    if (Validator.MOVING_STRING.includes(input) === false) {
      throw new Error('U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력할 수 있습니다.');
    }
  },

  checkGameCommand(input) {
    if (Validator.GAME_COMMAND_STRING.includes(input) === false) {
      throw new Error('R(재시작)과 Q(종료) 중 하나의 문자만 입력할 수 있습니다.');
    }
  },
};

module.exports = Validator;