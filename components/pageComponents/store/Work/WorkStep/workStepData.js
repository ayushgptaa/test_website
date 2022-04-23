import img1 from '/public/images/store/Work/workSteps/1.png'
import img2 from '/public/images/store/Work/workSteps/2.png'
import img3 from '/public/images/store/Work/workSteps/3.png'
import img4 from '/public/images/store/Work/workSteps/4.png'

const workStepData = [
  {
    img: img1,
    serialNo: 1,
    primaryHeading: 'Upload a file',
    primaryText: `To get started, you'll customize your storage plan. Set your preferred Cost, Redundancy, Size, Speed and Number of Storage Providers (Blobbers), and submit the storage plan "offer" to the network.`,
    primaryText2:
      'Once your offer is matched with a batch of Blobbers, you can select a file to upload to the Züs Cloud Network.',
    secondaryText: {
      text: 'A proof of this storage agreement is issued to the Züs blockchainin the form of an “Allocation ID”.',
    },
  },
  {
    img: img2,
    serialNo: 2,
    primaryHeading: 'Split up the file',
    primaryText: `As the fie is uploaded, it is split up in to a small bits.`,
    secondaryText: {
      text: 'This is an erasure coding process that enables the stored files to be distributed and resillient (reliable). For additional privacy, you can opt to encrypt your file prior to uploading.',
    },
  },
  {
    img: img3,
    serialNo: 3,
    primaryHeading: 'Distribute the file bits',
    primaryText: `Your file bits are then distributed out to various servers (Blobbers)`,
    secondaryText: {
      text: 'The bits are both distributed to and stored by your allocated batch of Blobbers, as per the storage agreement terms (specified in Allocation ID).',
    },
  },
  {
    img: img4,
    serialNo: 4,
    primaryHeading: 'Access your file',
    primaryText: `When you want your file, the bits are brought back together again, reshaping the file to its original form.`,
    secondaryText: {
      text: 'Only a specified number of bits, as per the Allocation ID, are required to reshape the file. This means the file can be reshaped even if only a portion of Blobbers are online.',
    },
  },
]

export default workStepData
