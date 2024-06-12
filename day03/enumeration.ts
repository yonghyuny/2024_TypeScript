enum Direction {
  East,
  West,
  South,
  North,
}

const dir: Direction = Direction.East;

enum HttpStatus {
  OK,
  NotFound,
}

const response: HttpStatus = HttpStatus.OK;

enum Status {
  Pending,
  InProgress,
  Completed,
  Failed,
}

const getStatus = (status: Status): string => {
  switch (status) {
    case Status.Pending:
      return "작업 대기 중";
    case Status.InProgress:
      return "작업 진행 중";
    case Status.Completed:
      return "작업 완료";
    case Status.Completed:
      return "작업 실패";
    default:
      return "알수 없는 상태";
  }
};
