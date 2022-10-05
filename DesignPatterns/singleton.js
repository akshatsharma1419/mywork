// Singleton pattern (Creational pattern)
// When we want to limit the number of instances of an object to atmost 1

function Process(state) {
  this.state = state;
}

const Singleton = (function () {
  function ProcessManager() {
    this.noOfProcesses = 0;
  }
  let processManager;

  function createProcessManager() {
    processManager = new ProcessManager();
    return processManager;
  }

  return {
    getProcessManager: () => {
      if (!processManager) processManager = createProcessManager();
      return processManager;
    },
  };
})();

const processManager = Singleton.getProcessManager();
