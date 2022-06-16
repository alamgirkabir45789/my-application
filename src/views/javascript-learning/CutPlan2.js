const _ = require("lodash");
const modifiedPoColorDetailsComb = [
  {
    colorId: "b8b55ffe-5bd6-4345-997e-1581a5f88c4b",
    extraPercentage: 0,
    poNo: "PO-0001001",
    destination: "Bangladesh",
    shipmentDate: "2022-04-30",
    shipmentMode: "AIR",
    inspectionDate: "2022-04-21",
    orderQty: 100,
    orderUOM: "pc",
    excessPercentage: "0",
    wastagePercentage: "0",
    colorName: "Green",
    withExtra: 50,
    colorQty: 50,
    layPerCut: 25,
    remainingQty: 25,
    totalQty: 48,
    isComplete: false,
  },

  {
    colorId: "b91d3b46-fdc8-487c-9750-89b80b5e0fae",
    extraPercentage: 0,
    poNo: "PO-0001001",
    destination: "Bangladesh",
    shipmentDate: "2022-04-30",
    shipmentMode: "AIR",
    inspectionDate: "2022-04-21",
    orderQty: 100,
    orderUOM: "pc",
    excessPercentage: "0",
    wastagePercentage: "0",
    colorName: "Black",
    withExtra: 50,
    colorQty: 50,
    layPerCut: 12,
    remainingQty: 12,
    totalQty: 36,
    isComplete: false,
  },
  {
    colorId: "b8b55ffe-5bd6-4345-997e-1581a5f88c4y",
    extraPercentage: 0,
    poNo: "PO-0001002",
    destination: "Bangladesh",
    shipmentDate: "2022-04-30",
    shipmentMode: "AIR",
    inspectionDate: "2022-04-21",
    orderQty: 100,
    orderUOM: "pc",
    excessPercentage: "0",
    wastagePercentage: "0",
    colorName: "Green",
    withExtra: 50,
    colorQty: 50,
    layPerCut: 25,
    remainingQty: 25,
    totalQty: 48,
    isComplete: false,
  },
  {
    colorId: "b91d3b46-fdc8-487c-9750-89b80b5e0fae",
    extraPercentage: 0,
    poNo: "PO-0001002",
    destination: "Bangladesh",
    shipmentDate: "2022-04-30",
    shipmentMode: "AIR",
    inspectionDate: "2022-04-21",
    orderQty: 100,
    orderUOM: "pc",
    excessPercentage: "0",
    wastagePercentage: "0",
    colorName: "Black",
    withExtra: 50,
    colorQty: 50,
    layPerCut: 12,
    remainingQty: 12,
    totalQty: 36,
    isComplete: false,
  },
];
const isColorGroup = true;
const isRunningCut = true;
const layPerCut = 13;
const sizeInfo = {
  total: 4,
};

if (isColorGroup) {
  const coppiedCombo = _.cloneDeep(
    _.sortBy(modifiedPoColorDetailsComb, ["colorName"])
  );
  if (isRunningCut) {
    const totalLayCount = modifiedPoColorDetailsComb.reduce(
      (acc, curr) => (acc = acc + curr.layPerCut),
      0
    );

    const fullSteps = parseInt(totalLayCount / layPerCut);
    const remainingQty = totalLayCount % layPerCut;
    const cutSteps = [];
    let stepCount = 1;
    while (stepCount <= fullSteps) {
      cutSteps.push(layPerCut);
      stepCount++;
    }
    if (remainingQty !== 0) {
      cutSteps.push(remainingQty);
    }

    let runningIndex = 0;
    const combo = cutSteps.map((step, index, arr) => {
      let cuttingDetails = [];
      const runningItem = coppiedCombo[runningIndex];

      if (step <= runningItem.remainingQty) {
        const innerItem = { ...runningItem };
        innerItem.layPerCut = step;
        runningItem.layPerCut = step;
        runningItem.remainingQty = runningItem.remainingQty - step;
        delete innerItem.remainingQty;
        cuttingDetails.push(innerItem);
      } else {
        const newInnerItem = { ...runningItem };
        newInnerItem.layPerCut = runningItem.remainingQty;
        runningItem.isComplete = true;
        runningIndex = runningIndex + 1;
        const nextItem = coppiedCombo[runningIndex];
        const nextInnerItem = { ...nextItem };
        nextInnerItem.layPerCut = step - runningItem.remainingQty;
        nextItem.remainingQty = nextItem.layPerCut - nextInnerItem.layPerCut;
        delete newInnerItem.remainingQty;
        delete nextInnerItem.remainingQty;
        cuttingDetails.push(newInnerItem, nextInnerItem);
      }

      return { step, cuttingDetails };
    });
    console.log({ isColorGroup, isRunningCut });
    console.log(JSON.stringify(combo, null, 2));
  } else {
    const coppiedCombo = _.cloneDeep(modifiedPoColorDetailsComb);

    const combo = coppiedCombo.map((com, comIndx) => {
      let cuttingDetails = [];
      const fullSteps =
        com.remainingQty <= layPerCut
          ? 0
          : parseInt(com.remainingQty / layPerCut);
      const remainingQty =
        com.remainingQty <= layPerCut
          ? com.remainingQty
          : parseInt(com.remainingQty % layPerCut);
      const _cutSteps = [];
      let stepCount = 1;
      while (stepCount <= fullSteps) {
        _cutSteps.push(layPerCut);
        stepCount++;
      }
      if (remainingQty !== 0) {
        _cutSteps.push(remainingQty);
      }
      _cutSteps.forEach((step) => {
        const innerItem = { ...com };
        innerItem.layPerCut = step;
        innerItem.totalQty = step * sizeInfo.total;
        delete innerItem.remainingQty;
        delete innerItem.isComplete;
        const obj = {
          step,
          cuttingDetails: [{ ...innerItem }],
        };
        cuttingDetails.push(obj);
      });
      return cuttingDetails;
    });
    console.log({ isColorGroup, isRunningCut });
    console.log(JSON.stringify(combo, null, 2));
  }
} else {
  if (isRunningCut) {
    const totalLayCount = modifiedPoColorDetailsComb.reduce(
      (acc, curr) => (acc = acc + curr.layPerCut),
      0
    );

    const fullSteps = parseInt(totalLayCount / layPerCut);
    const remainingQty = totalLayCount % layPerCut;
    const cutSteps = [];
    let stepCount = 1;
    while (stepCount <= fullSteps) {
      cutSteps.push(layPerCut);
      stepCount++;
    }
    if (remainingQty !== 0) {
      cutSteps.push(remainingQty);
    }
    const coppiedCombo = _.cloneDeep(modifiedPoColorDetailsComb);
    let runningIndex = 0;
    const combo = cutSteps.map((step, index, arr) => {
      let cuttingDetails = [];
      const runningItem = coppiedCombo[runningIndex];

      if (step <= runningItem.remainingQty) {
        const innerItem = { ...runningItem };
        innerItem.layPerCut = step;
        runningItem.layPerCut = step;
        runningItem.remainingQty = runningItem.remainingQty - step;
        delete innerItem.remainingQty;
        cuttingDetails.push(innerItem);
      } else {
        const newInnerItem = { ...runningItem };
        newInnerItem.layPerCut = runningItem.remainingQty;
        runningItem.isComplete = true;
        runningIndex = runningIndex + 1;
        const nextItem = coppiedCombo[runningIndex];
        const nextInnerItem = { ...nextItem };
        nextInnerItem.layPerCut = step - runningItem.remainingQty;
        nextItem.remainingQty = nextItem.layPerCut - nextInnerItem.layPerCut;
        delete newInnerItem.remainingQty;
        delete nextInnerItem.remainingQty;
        cuttingDetails.push(newInnerItem, nextInnerItem);
      }

      return { step, cuttingDetails };
    });
    console.log({ isColorGroup, isRunningCut });
    console.log(JSON.stringify(combo, null, 2));
  } else {
    const coppiedCombo = _.cloneDeep(modifiedPoColorDetailsComb);

    const combo = coppiedCombo.map((com, comIndx) => {
      let cuttingDetails = [];
      const fullSteps =
        com.remainingQty <= layPerCut
          ? 0
          : parseInt(com.remainingQty / layPerCut);
      const remainingQty =
        com.remainingQty <= layPerCut
          ? com.remainingQty
          : parseInt(com.remainingQty % layPerCut);
      const _cutSteps = [];
      let stepCount = 1;
      while (stepCount <= fullSteps) {
        _cutSteps.push(layPerCut);
        stepCount++;
      }
      if (remainingQty !== 0) {
        _cutSteps.push(remainingQty);
      }
      _cutSteps.forEach((step) => {
        const innerItem = { ...com };
        innerItem.layPerCut = step;
        innerItem.totalQty = step * sizeInfo.total;
        delete innerItem.remainingQty;
        delete innerItem.isComplete;
        const obj = {
          step,
          cuttingDetails: [{ ...innerItem }],
        };
        cuttingDetails.push(obj);
      });
      return cuttingDetails;
    });
    console.log({ isColorGroup, isRunningCut });
    console.log(JSON.stringify(combo, null, 2));
  }
}
