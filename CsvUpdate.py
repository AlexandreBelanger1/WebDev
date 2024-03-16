import pandas as pd
url='https://drive.google.com/file/d/1U4VgYg8wXU5_WD9xOqKVf1Gl9_mSgk-i/view?usp=sharing'
url='https://drive.google.com/uc?id=' + url.split('/')[-2]
df = pd.read_csv(url)
print(df)
