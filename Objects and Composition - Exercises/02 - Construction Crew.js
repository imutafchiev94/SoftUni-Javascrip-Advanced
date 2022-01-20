function solve(worker) {
    let waterToHave = worker.experience * (worker.weight * 0.1);
    if(worker.dizziness) {
        worker.levelOfHydrated += waterToHave;
        worker.dizziness = false;
    }

    return worker;
}