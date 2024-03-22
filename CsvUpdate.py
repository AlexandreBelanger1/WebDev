import pandas as pd
csvUrl1 = 'https://drive.google.com/file/d/1U4VgYg8wXU5_WD9xOqKVf1Gl9_mSgk-i/view?usp=sharing'
csvUrl2 = 'https://drive.google.com/file/d/1U5NtH8VyQ2iVNiQiMnADBIgjK4xHgupb/view?usp=sharing'
csvUrl3 = 'https://drive.google.com/file/d/1x_fwR0LecPh7ZTxa2tEOa7O5LDIax4Qd/view?usp=sharing'
csvUrl4 = 'https://drive.google.com/file/d/1dt5ndjWEJ0QAFwKOEEDtRhOHlc26SfET/view?usp=sharing'

def importCsv(url1):
    url='https://drive.google.com/uc?id=' + url1.split('/')[-2]
    df = pd.read_csv(url)
    return df

def updateCsvs():
    #Update data1.csv
    df1 = importCsv(csvUrl1)
    df1.to_csv("public\DataFiles\data1.csv",index = False)
    #Update data2.csv
    df2 = importCsv(csvUrl2)
    df2.to_csv("public\DataFiles\data2.csv",index=False)
    #Update data3.csv
    df3 = importCsv(csvUrl3)
    df3.to_csv("public\DataFiles\data3.csv",index=False)
    #Update data4.csv
    df4 = importCsv(csvUrl4)
    df4.to_csv("public\DataFiles\data4.csv",index=False)

updateCsvs()
